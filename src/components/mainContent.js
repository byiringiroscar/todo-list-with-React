import React from "react";

const CardList = ({hobbiesList, onDelete}) => (
        <div className="card-list">
            {hobbiesList.map((hobby, index) => (
                <Card index={index} key={index} hobby={hobby} onDelete={onDelete} />
            ))}
        </div>
);
class Card extends React.Component{
    handleDelete = (event) => {
        event.preventDefault();
        const indexId = this.props.index;
        this.props.onDelete(indexId)
      }
    render(){
        return (
            <div className="card">
                <h3>{this.props.hobby}</h3>
                <img  className="delete" onClick={this.handleDelete} src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png" alt="delete" />
            </div>
        );
    }
}
class MainContent extends React.Component {
    state = {
        hobbiesSingle: '',
        hobbiesList: [] 
    }
    handleOnChange = (event) => {
        event.preventDefault();
        this.setState({
            hobbiesSingle: event.target.value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const newHobby = this.state.hobbiesSingle;
        const updatedHobbiesList = [...this.state.hobbiesList, newHobby];
        this.setState({
            hobbiesList: updatedHobbiesList,
            hobbiesSingle: '',
          });
        console.log(this.state.hobbiesList); // Output the updated hobbies list to the console
      }
      handleDeleteData = (index) => {
        const updatedHobbiesList = [...this.state.hobbiesList];
        updatedHobbiesList.splice(index, 1);
        this.setState({
          hobbiesList: updatedHobbiesList,
        });
      };
      
    render(){
        return (
            <main>
                <div className="main-content">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.hobbiesSingle} onChange={this.handleOnChange} placeholder="Enter your Hobbies" required />
                        <button>Add Hobbies</button>
                    </form>
                    <CardList hobbiesList={this.state.hobbiesList} onDelete={this.handleDeleteData} />
                </div>
            </main>
        );
    }
}

export default MainContent;