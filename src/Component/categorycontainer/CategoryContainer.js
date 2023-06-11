import React, { Component } from 'react'
import CategoryItem from '../categoryitem/CategoryItem';
import '../categorycontainer/CategoryContainerStyle.scss'

class CategoryContainer extends Component {

    constructor() {
        super();
        this.state = {
            courseCategories: []
        };
    }
    componentDidMount() {
        fetch('https://ranjanaraye.github.io/course/Course-Category.json')
          .then(response => response.json())
          .then(items => this.setState({ courseCategories: items }));
      }


    render() {
        return (
            <div className='categories-container'>

                {
                    
                    this.state.courseCategories.map(({ id, title, imageUrl }) => (
                        <CategoryItem key={id}
                            title={title}
                            imageUrl={imageUrl} />
                    ))
                }
            </div>
        )
    }
}

export default CategoryContainer;