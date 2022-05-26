import React,{Component} from 'react'
import axios from 'axios'

class ListBecas extends Component{
    constructor(props){
        super(props)
        this.state = {
            becas:[],
            viewInternationals: 1
        }
    }

    componentDidMount(){
        this.refreshList()
    }

    refreshList = () => {
        axios
        .get("http://localhost:8000/becas/list/")
        .then(res => this.setState({becas:res.data}))
        .catch(err => console.log(err))
    }

    displayInternationals = status => {
        if(status){
            return this.setState({viewInternationals:2});
        }
        return this.setState({viewInternationals:1});
    }

    renderTabList = () => {
        return(
            <div>
                <span onClick={() => this.displayInternationals(true)}>
                    BECAS INTERNACIONALES
                </span>
                <span onClick={() => this.displayInternationals(false)}>
                    BECAS NACIONALES
                </span>
            </div>
        )
    }

    render = () => {
        const {viewInternationals} = this.state
        const items = this.state.becas.filter(
            (item) => item.categoria === viewInternationals
        )
        return (
            <div>
                <span onClick={() => this.displayInternationals(false)}
                className="btn btn-primary ">
                    BECAS NACIONALES
                </span>
                <span onClick={() => this.displayInternationals(true)}
                className="btn btn-primary ">
                    BECAS INTERNACIONALES
                </span>

                {items.map((item)=>(
                    <li key={item.id}>
                    <span>
                        {item.nombre}
                    </span>
                    
                        {(()=>{
                            if (item.categoria === 1){
                                return (
                                <span> NACIONAL </span>
                                )
                            }else{ 
                                return(
                                    <span> INTERNACIONAL </span>
                                )
                            }
                        })()}
                    <span>
                        {item.universidad}
                    </span>
                    <span>
                        {item.pais}
                    </span>
                </li>
                ))}
            </div>
          /*  items.map((item) =>(
            <li key={item.id}>
                <span>
                    {item.nombre}
                </span>
                
                    {(()=>{
                        if (item.categoria === 1){
                            return (
                            <span> NACIONAL </span>
                            )
                        }else{ 
                            return(
                                <span> INTERNACIONAL </span>
                            )
                        }
                    })()}
                <span>
                    {item.universidad}
                </span>
                <span>
                    {item.pais}
                </span>
            </li>
        ))*/)
    }
}

export default ListBecas