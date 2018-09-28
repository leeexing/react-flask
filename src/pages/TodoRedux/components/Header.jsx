import React, { Component } from 'react'
import { Input, Form, Button } from 'antd'

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
    console.log(e)
  }
  render () {
    return (
      <header className="header">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem>
            <Input className="header add-todo"
              placeholder="input new todo"
            />
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

export default Header
