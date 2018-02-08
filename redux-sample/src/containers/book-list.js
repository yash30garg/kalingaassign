import React, {Component} from 'react';
import {connect }from 'react-redux';

//to render the list of books
 class BookList extends Component {
renderList()
{
return this.props.books.map((book)=> {
    return (
        <li key={book.title} className ="list-group-item">{book.title}</li>
    );
}
);
}

render()
{
    return(
        <ul className="list-group col-sm-4">
        {this.renderList}
        </ul>
    )
}
} 
//take application state as an argument 
function mapStateToProps(state) 
{
//whatever is returned will show up as props inside of bookList


return {
books: state.books           
};
}
export default connect(mapStateToProps) (BookList);
