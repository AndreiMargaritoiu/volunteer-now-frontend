import React from "react"
import axiosInstance from "../Axios/Axios";

class MainComponent extends React.Component{


    componentDidMount(){
        axiosInstance.get("api/books").then(response=>{
            console.log(response);
        })
    }

    render(){
        return(
            <div>sdklgjsdkljgdslkl</div>
        );
    }
}

export default MainComponent;