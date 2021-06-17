export default {
    template: `
<form v-on:submit.prevent="updateP">
    <div class="mb-3">
    <label class="form-label">ID korisnika:</label>
    <input type="number" class="form-control" v-model="korpe.korisnik_id" required>
    </div>
    <div class="mb-3">
    <label class="form-label">ID proizvoda</label>
    <input type="number" class="form-control" v-model="korpe.proizvod_id" requreid>
    </div>
    <div class="mb-3">
    <label class="form-label">Kolicina</label>
    <input type="number" class="form-control" v-model="korpe.kolicina" requreid>
    </div>
    <div class="mb-3">
    <label class="form-label">Datum</label>
    <input type="datetime-local" class="form-control" v-model="korpe.datum" requreid>
    </div>
    <div class="mb-3">
    <input class="btn btn-primary" type="submit" value="Dodaj"> 
    </div>
</form>
    `,
    data() {
        return {
            korpe: {},
        }
    },
    methods: {
        refresh() {
            axios.get(`api/korpa/${this.$route.params['id']}`).then((response) => {
                this.korpe = response.data;
            });
        },
        create(korpa) {
            axios.post("api/korpa", korpa).then((response) => {
                this.$router.push("/korpa");
                this.refreshK();
            });
        }
    },
    created() {
        this.refresh();
    }
}