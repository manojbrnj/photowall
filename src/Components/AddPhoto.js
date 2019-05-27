import React, {Component} from 'react'

class AddPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const imageDesc = event.target.elements.description.value
        if(imageLink && imageDesc){
            const post={
                id: Number(new Date()),
                description: imageDesc,
                imageLink: imageLink
            }
            this.props.addPost(post)
            this.props.history.push('/')
        }
    }

    render(){
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"></input>
                    <input type="text" placeholder="Description" name="description"></input>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default AddPhoto