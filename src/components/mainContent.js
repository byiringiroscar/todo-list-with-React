import React from "react";

const CardList = () => (
        <div className="card-list">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
);
class Card extends React.Component{
    render(){
        return (
            <div className="card">
                <h3>I like games</h3>
            </div>
        );
    }
}
class MainContent extends React.Component {
    render(){
        return (
            <main>
                <div className="main-content">
                    <form>
                        <input type="text" placeholder="Enter your Hobbies" />
                        <button>Add Hobbies</button>
                    </form>
                    <CardList />
                </div>
            </main>
        );
    }
}

export default MainContent;