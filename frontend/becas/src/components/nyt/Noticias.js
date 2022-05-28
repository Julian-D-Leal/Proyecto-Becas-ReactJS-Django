import React, {Component} from "react";
import axios from 'axios'
import './Noticias.css'


class Noticias extends Component {

    constructor(props) {
        super(props);
        this.state = {
          noticias: []
        };
      }

    componentDidMount(){
        this.refreshList()
    }

    refreshList = () => {
        axios
        .get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=AmrV4WvGf6xJJBXTAwZJbegx9XxErAOJ")
        .then(res => this.setState({noticias:res.data.results}))
        .catch(err =>{console.log(err)})
    }

    render = () => {
        const items = this.state.noticias
        return (
            <div className="main columns"> 
                {items.slice(1,5).map((item)=>(
                    <div className="column main-column" key={item.title}>
                        <div className="article first-article">
	                        <div className="article-image imagen">
                                <img src={item.multimedia[0].url} className="imagen"/>
                            </div> 
                            <div className="article-body">
                                <h2 className="article-title">{item.title}</h2>
                                <p className="article-content">{item.abstract}</p>	
                            </div>
                        </div>
                    </div>
                ))}
            </div>)
    }
}
export default Noticias