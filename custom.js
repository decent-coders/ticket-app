var app = Vue.createApp({
    data(){
        return{
            confirmed:false,
            name:"",
            mobile:'',
            appliedCupon:null,
            cuponCode:'',
            cupons:[
                {
                    code:'Anonna-420',
                    discount: 420
                },
                {
                    code:'Rifat-420',
                    discount: 420
                },
                {
                    code:'Hridoy-420',
                    discount: 420
                },
                {
                    code:'Maruf-420',
                    discount: 420
                },
                {
                    code:'Kabir-420',
                    discount: 420
                },
                {
                    code:'100TAKAOFF',
                    discount: 100
                },
            ],

            selectedSeats:{
                sold:{
                    text:'Sold',
                    color:'red',
                },
                availabe:{
                    text:'Available',
                    color:'#fff',
                },
                booked:{
                    text:'Booked',
                    color:'gray',
                },
                selected:{
                    text:'Selected',
                    color:'#00ff00',
                },
            },

            seats:[
                {
                    name:'A1',
                    type:'available',
                    price: 700
                },
                {
                    name:'A2',
                    type:'available',
                    margin:'need',
                    price: 700
                    
                },
                {
                    name:'A3',
                    type:'available',
                    price: 700
                },
                {
                    name:'A4',
                    type:'available',
                    price: 700
                },
                {
                    name:'B1',
                    type:'sold',
                    price: 675
                },
                {
                    name:'B2',
                    type:'sold',
                    margin:'need',
                    price: 675
                },
                {
                    name:'B3',
                    type:'available',
                    price: 675
                },
                {
                    name:'B4',
                    type:'available',
                    price: 675
                },
                {
                    name:'C1',
                    type:'available',
                    price: 650
                },
                {
                    name:'C2',
                    type:'available',
                    margin:'need',
                    price: 650
                },
                {
                    name:'C3',
                    type:'booked',
                    price: 650
                },
                {
                    name:'C4',
                    type:'booked',
                    price: 650
                },
                
                {
                    name:'D1',
                    type:'available',
                    price: 650
                },
                {
                    name:'D2',
                    type:'available',
                    margin:'need',
                    price: 650
                },
                {
                    name:'D3',
                    type:'available',
                    price: 650
                },
                {
                    name:'D4',
                    type:'available',
                    price: 650
                },
                
                {
                    name:'E1',
                    type:'available',
                    price: 600
                },
                {
                    name:'E2',
                    type:'available',
                    margin:'need',
                    price: 600
                },
                {
                    name:'E3',
                    type:'available',
                    price: 600
                },
                {
                    name:'E4',
                    type:'available',
                    price: 600
                },
                
                {
                    name:'F1',
                    type:'available',
                    price: 500
                },
                {
                    name:'F2',
                    type:'available',
                    margin:'need',
                    price: 500
                },
                {
                    name:'F3',
                    type:'available',
                    price: 500
                },
                {
                    name:'F4',
                    type:'available',
                    price: 500
                },
                {
                    name:'G1',
                    type:'available',
                    margin:'no',

                    price: 450
                },
                {
                    name:'G2',
                    type:'available',
                    margin:'no',

                    price: 450
                },
                {
                    name:'G3',
                    type:'available',
                    margin:'no',

                    price: 450
                },
                {
                    name:'G4',
                    type:'available',
                    margin:'no',

                    price: 450
                },
                
                {
                    name:'G5',
                    type:'available',
                    margin:'no',

                    price: 450
                },

            ]
        }
    },

    computed:{
        sseats(){
            let sc = this.seats.filter((item) => item.type ==='selected');
            return sc;
        },
        totalCost(){
            let tc = 0;
            this.sseats.forEach(seat => {
                tc += seat.price;
            });
            if(this.appliedCupon !== null){
                tc = tc - this.appliedCupon.discount;
            }
            return tc;
        },

    },

    watch:{
        // cuponCode(newValue){
            
        //     if (newValue.length === 10){
        //         let searchCupons = this.cupons.filter((item) => item.code === newValue)}

        //     if(searchCupons.length === 1){
        //         this.appliedCupon = searchCupons[0];
        //         this.cuponCode = '';
        //         alert('Coupon used successfully')
        //     }else{
        //         alert('Cupon Code not valid!');
        //     }
        // }
        cuponCode(newValue,oldvalue){
                let searchCupons = this.cupons.filter((item) => item.code === newValue)
            if(searchCupons.length === 1){
                this.appliedCupon = searchCupons[0];
                this.cuponCode = '';
            }
            if(newValue.length >= 11){
                alert('Cupon Code not valid!');
                this.cuponCode = oldvalue;
            }
        },
        mobile(newvalue,oldvalue){
            if(isNaN(newvalue)){
                alert('Enter a valid number');
                this.mobile = oldvalue;
            }
        }
        
    },

    methods:{
        hande(i){
            let clikedSeat = this.seats[i];
            if(clikedSeat.type === 'booked'){
                alert('This seat is already booked');
                return
            }
            if(clikedSeat.type === 'sold'){
                alert('This seat is sold');
                return
            }
            
            if (clikedSeat.type == 'available' &&  this.sseats.length >3){
                alert('You can not select more than 4 seats');
                return
            }
            clikedSeat.type = clikedSeat.type === 'selected'?'available':'selected',
            console.log(clikedSeat);

        },
        confirm() {
            if (!this.name || !this.mobile) {
              alert("Please enter name and mobile");
              return;
            }
          
            this.confirmed = true;
          },
          resetData() {
            this.confirmed = false;
            this.name = "";
            this.mobile = "";
            this.appliedCoupon = null;
          
            this.seats.forEach((seat) => {
              if (seat.type === "selected") {
                seat.type = "sold";
              }
            });
          }
    },


})
app.mount('#id');

