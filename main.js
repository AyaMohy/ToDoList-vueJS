const {createApp}=Vue

createApp(
    {
        data(){
            return{
                newcontent:'',
                counter:0,
                increasedvalue:0,
                todos:[],
                checked:'all',
                checkedNames:[],
                styleobject:['btn','w-bold'],
                filters:{
                    all:function(todosarray){return todosarray} ,
                    active:(todos)=>todos.filter((todo)=>!todo.completed),
                    completed:(todos1)=>todos1.filter((todo)=>todo.completed)
                }  
            }
        },
        computed:{
            filtertodo(){
                return this.filters[this.checked](this.todos) 
            },
        },
        methods:{
            addtodo(){
               this.todos.push(
                {
                    id:this.counter++,
                    content:this.newcontent,
                    completed:false
                }
               )
            //    this.newcontent='' 
            },
            checkcomplete(id){
               let targetitem= this.todos.find( (item)=>item.id==id )
               targetitem.completed=!targetitem.completed
            },
            deletetodo(id){
                let targetindex= this.todos.findIndex( (item)=>item.id==id )
                this.todos.splice(targetindex,1)  
            },
           
           
           
        }  
    }
).mount("#app")