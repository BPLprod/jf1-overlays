const PosComponent = {
    name: "PosComponent",
    props: ["pos", "hideText"],
    template: `<div class="pos" :class="{'big-text': pos <= 9, 'small-text': pos >= 10, 'hide': hideText}"><span>{{ pos }}</span></div>`
}
const TyreComponent = {
    name: "Tyres",
    props: ["tyres", "showLaps", "adjust"],
    computed: {
        color() {
            if (this.tyres) return this.tyres.color;
        },
        letter() {
            if (!this.tyres || !this.tyres.name) return "-"
            if (this.tyres.name.length === 2) return this.tyres.name; // C2/C3 etc
            return this.tyres.name.slice(0,1).toUpperCase();
        },
        laps() {
            if (!this.tyres) return "";
            return this.tyres.laps;
        }
    },
    template: `<div class="tyre">
                        <div class="tyres-text">{{ letter }}</div>
                        <div class="tyres-color" :style="{ borderColor: color }"></div>
                        <div class="tyres-laps" v-if="showLaps">{{ laps + (adjust || 0) }}</div>
                    </div>`
}

const PitComponent = {
    name: "PitComponent",
    props: ["color", "pitStatus", "carI", "tyres"],
    components: { Tyres: TyreComponent },
    data: () => ({
        now: new Date(),
        pitTime: null,
        totalPitTime: null,
        state: null,
        timer_total: null,
        timer_stop: null,
        states: [
            "finished",
            "lane",
            "stopped"
        ],
        tyresOff: null,
        tyresOn: null,
        screen: "times"
    }),
    computed: {
        totalPitTimer() {
            if (this.totalPitTime) return (this.totalPitTime / 1000).toFixed(1)
            return (this.timer_total ? ((this.now - this.timer_total) / 1000).toFixed(1) : "--")
        },
        stopTime() {
            if (this.pitTime) return (this.pitTime / 1000).toFixed(1)
            let diff = ((this.now - this.timer_stop) / 1000);
            return (this.timer_stop ? diff.toFixed(1) : "--")
        },
        _tyres() {
            return JSON.stringify(this.tyres);
        }
    },
    watch: {
        state(newState, oldState) {

            if (oldState === "stopped") {
                console.log("[PIT]", this.carI, "stop finshed - call time")
                this.pitTime = (new Date() - this.timer_stop)
                setTimeout(() => {
                    this.screen = "tyres"
                }, 3000);
            }


            if (newState === "lane" && !this.timer_total) {
                console.log("[PIT]", this.carI, "entry timer started")
                this.timer_total = new Date();
            }
            if (newState === "finished" && this.timer_total) {
                console.log("[PIT]", this.carI, "full timer stopped")
                this.totalPitTime = (new Date() - this.timer_total);
            }

            if (newState === "stopped") {
                console.log("[PIT]", this.carI, "stopped - timer started")
                this.timer_stop = new Date();
            }
        },
        pitStatus(newStatus, oldStatus) {
            console.log("[PIT]", this.carI, "|",  this.states[oldStatus], oldStatus, "->", newStatus, this.states[newStatus]);
            this.state = this.states[newStatus]
        },
        _tyres(newTyres, oldTyres) {
            newTyres = JSON.parse(newTyres);
            oldTyres = JSON.parse(oldTyres);
            if (newTyres.name === oldTyres.name && newTyres.laps === oldTyres.laps + 1) return;
            console.log("[PIT]", this.carI, "| tyres:", { newTyres, oldTyres })
            this.tyresOn = newTyres;
        }
    },
    mounted() {
        console.log("[PIT] Mounted", this.pitStatus);
        this.state = this.states[this.pitStatus];
        this.tyresOff = this.tyres;

        setInterval(() => {
            this.now = new Date();
        }, 100)
    },
    template: `<div class="pit-timers">
        <div class="pit-left" :style="{color: totalPitTime ? color : null}">{{ totalPitTimer }}</div>
<transition name="fade" mode="out-in">
    <div class="pit-screen pit-screen-times" v-if="screen === 'times'" key="times">
        <div class="pit-right" :style="{color: pitTime ? color : null}">{{ stopTime }}</div>
    </div>
    <div class="pit-screen pit-screen-tyres" v-if="screen === 'tyres'" key="tyres">
        <tyres class="tyres-off" :tyres="tyresOff" :showLaps="true" :adjust="1"></tyres>
        <div class="tyre-arrow" v-if="tyresOn" >→</div>
        <tyres class="tyres-on" v-if="tyresOn"  :tyres="tyresOn" :showLaps="true"></tyres>
    </div>
</transition>
</div>`
}

const AlertComponent = {
    name: "Alert",
    props: ["alert"],
    data: () => ({
        showSponsor: false,
        latchedSponsorHold: null
    }),
    methods: {
        bgWrap(url) {
            return { backgroundImage: `url(${url})`}
        }
    },
    mounted() {
        if (this.$root.showSponsor && this.alert.sponsor) {
            this.latchedSponsorHold = this.$root.showSponsor(this.alert.sponsor.slot);
            this.showSponsor = true;
        } else {
            this.showSponsor = true;
        }

        if (this.alert && this.alert.sponsor && this.$root.setSponsor) this.$root.setSponsor(this.alert.sponsor.slot, 60 * 1000);
        console.log("alert in", this.alert.duration)
        setTimeout(() => {
            console.log("alert sponsor out", this.alert.duration)
            this.showSponsor = false;
        }, (this.alert.duration || 8000) - 2000)
        // (this.alert.duration * 0.8) || 5000
    },
    computed: {
        headshotBackground() {
            if (!this.alert.headshot) return {};
            return this.bgWrap(this.alert.headshot)
        },
        sponsorBackground() {
            if (!this.alert.sponsor || !this.alert.sponsor.logo) return {};
            return this.bgWrap(this.alert.sponsor.logo)
        },
        definitelyShowSponsor() {
            if (!this.alert.sponsor) return false;
            if (!this.showSponsor) return false;
            if (this.latchedSponsorHold === false) return false;
            return true;
        },
        definitelyShowSponsorNotGraphical() {
            if (!this.alert.sponsor) return false;
            if (this.latchedSponsorHold === false) return false;
            return true;
        }
    },
    template: `<div class="alert-wrapper" :class="{'has-sponsor': alert.sponsor, 'has-lower-sponsor': definitelyShowSponsor, 'is-major': alert.major}">
<div class="alert">
    <div class="alert-part alert-major" v-if="alert.major" :style="{ backgroundColor: alert.stripe, color: 'black' }">
        {{ alert.major }}
    </div>
    <div class="alert-part alert-main">
        <div class="alert-stripe" v-if="alert.stripe" :data-stripe="alert.stripe"
             :style="{ backgroundColor: alert.stripe }"></div>
        <div class="alert-body">
            <div class="alert-title" :class="{'two-part': alert.short_title }">
                <div class="alert-short" v-if="alert.short_title">{{ alert.short_title }}</div>
                <div class="alert-title-main">{{ alert.title }}</div>
            </div>
            <div class="alert-description">{{ alert.description }}</div>
        </div>
        <div class="alert-headshot" v-if="alert.headshot">
            <div class="alert-headshot-image" :style="headshotBackground"></div>
        </div>
        <div class="alert-sponsor-mini" v-if="alert.sponsor" :style="{backgroundColor: alert.sponsor.color }">
            <div class="alert-sponsor-logo" :style="sponsorBackground"></div>
        </div>
    </div>
</div>
<transition name="sponsor-down">
    <div class="alert-lower-sponsor-holder" v-if="definitelyShowSponsor">
    <div class="alert-lower-sponsor" :style="{backgroundColor: alert.sponsor.color }">
        <div class="alert-sponsor-text">{{ alert.sponsor.lower_text || alert.sponsor.context_name }}</div>
        <div class="alert-sponsor-logo-holder">
            <div class="alert-sponsor-logo" :style="sponsorBackground"></div>
        </div>
    </div>
    </div>
</transition>
</div>
`
}
