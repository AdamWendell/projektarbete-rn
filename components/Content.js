import React from 'react'
import {connect} from 'react-redux'
import ListWithHeaders from './ListWithHeaders'
import List from './List'


class Content extends React.Component {
  constructor(props) {
    super(props)
  }

	render() {
    const {data, selectedList} = this.props
    const selectedCategory = data.categories.find(categ => categ.title.en === selectedList)

    if (selectedCategory.tagsOrder) {
      const {items, tagsOrder} = selectedCategory
    
      return <ListWithHeaders items={items} tagsOrder={tagsOrder} />
    } else {
      const {items} = selectedCategory
      console.log(items)
      return <List items={items} />
    }

		
	}
}


function mapStateToProps({data, selectedList}) {
  return {data, selectedList}
}

export default connect(mapStateToProps)(Content)
