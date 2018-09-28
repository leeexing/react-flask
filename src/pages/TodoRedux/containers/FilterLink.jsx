import { connect } from 'react-redux'
import { setVisibleFilter } from '@/store/actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filterType === state.visibleFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibleFilter(ownProps.filterType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
