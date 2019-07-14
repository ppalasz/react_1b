import React from 'react';
import '../App.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Menu from '../menu.js';
import Book from '../components/book.js';

class Data extends React.Component {

  state = {
    maxId:-1,
    books: [],
    title:"",
    text:""
  }
  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/api.json")
    .then(res => res.json())
    .then(json => {

      setTimeout(() => {
        this.setState({ books: json  }) },200);
      });
    }

    handleSubmit(event) {
      console.log('book submitted: ' + this.state.title+ "  " +this.state.text);
      let books =  this.state.books
      this.setState({maxId: this.state.maxId-1});
      books.push({id: this.state.maxId ,title:this.state.title,text:this.state.text });
      this.setState({books: books});
      event.preventDefault();
    }

    handleChangeTitle(event) {
      this.setState({title: event.target.value});
    }

    handleChangeText(event) {
      this.setState({text: event.target.value});
    }

  render() {

    console.log(this.state.books)
    const d = this.state.books.map(item => <Book key={item.id} title={item.title} text={item.text} />)
    console.log(d)

    return (
      this.state.books.length>0 ?
    <div className="App">
      <Menu />
      <Header title="Data" />
      <div><form onSubmit={this.handleSubmit}>
      <label>
        Title:
        <input id="title" name="title" type="text"
        value={this.state.title}
        onChange={this.handleChangeTitle} />
      </label>
      <label>
        Text:
        <input id="text" name="text" type="text"
        value={this.state.text}
        onChange={this.handleChangeText} />
      </label>
      <input type="submit" value="Submit" />
    </form></div>
      <div>{d}</div>
      <Footer title="Stopka kontaktu" />
    </div>: <div><h2>loading ....</h2></div>);
  }



}

export default Data;
