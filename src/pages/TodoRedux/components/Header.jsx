import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '@/store/actions'
import { Input, Form, Button } from 'antd'

// const AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addTodo(input.value))
//         input.value = ''
//       }}>
//         <input ref={node => input = node} />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }

// export default connect()(AddTodo)

const FormItem = Form.Item

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      input: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.dispatch(addTodo(values.newTodo))
        this.props.form.resetFields()
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <header className="header">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('newTodo', {
              rules: [{ required: true, message: 'Please input your new todo!' }],
            })(
              <Input className="header add-todo"
                placeholder="input new todo"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >
              Add
            </Button>
          </FormItem>
        </Form>
      </header>
    )
  }
}

const mapStateToProps = ({todos}, ownProps) => {
  console.log(todos, '+++')
  return {
    todos
  }
}

const HeaderTodo = Form.create()(Header)

export default connect(mapStateToProps)(HeaderTodo)
