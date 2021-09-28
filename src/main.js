var app = new Vue({
    el:"#app",
    data: {
        nombre: null,
        apellido: null,
        email1: null,
        email2: null,
        telefono: null,    
        psw1: null,
        psw2: null,
        valor: true,        
    },

    methods:{
        validateForm: function(e){
            
            if(!this.nombre){
                alert("Debes agregar el nombre!");
                this.valor = false;
                e.preventDefault();
            }

            if(!this.apellido){
                alert("Debes agregar los apellidos!");
                this.valor = false;
                e.preventDefault();
            }

            if(!this.email1){
                alert("Debes agregar el email!");
                this.valor = false;
                e.preventDefault();
            }

            if(!this.email2){
                alert("Debes de confirmar el email!");
                this.valor = false;
                e.preventDefault();
            }

            if(this.email1 !== this.email2){
                alert("La confirmacion del Email no es correcta, por favor verificar");
                this.valor = false;
                e.preventDefault();
            }
    
            if(!this.telefono){
                alert("Debes agregar el telefono!");
                this.valor = false;
                e.preventDefault();
            }

            if(!this.psw1){
                alert("Debes agregar el password!");
                this.valor = false;
                e.preventDefault();
            }
            
            if(!this.psw2){
                alert("Debes confirmar el password!");
                this.valor = false;
                e.preventDefault();
            }

            if(this.psw1 !== this.psw2){
                alert("La confirmacion del Password no es correcta, por favor verificar");
                this.valor = false;
                e.preventDefault();
            }                 
            
            if(this.valor == true){
                alert("Registro Exitoso");                
            }

            this.valor = true;
        }
    }
})