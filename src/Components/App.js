import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removePost, addPost} from '../redux/actions'
import {withRouter} from 'react-router'

function mapStateToProps(state){
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removePost, addPost}, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App