import React, { Component } from 'react';
import { Button, List } from 'antd-mobile'

class App extends Component {
    render() {
        const boss = '李云龙'
        return (
            <div>
                <h2>独立团, 团长{boss}</h2>
                <ABattalion boss='张大喵'></ABattalion>
                <骑兵连 boss='孙德胜'></骑兵连>
            </div>
        )
    }
}

function 骑兵连(props) {
    return <h2>骑兵连连长{props.boss}, 冲啊！</h2>
}

class ABattalion extends Component {
    constructor (props) {
        super(props)
        this.state = {
            solders: ['虎子', '柱子', '王根生']
        }
        this.solder = 'hello world'
    }

    componentWillMount () {
        console.log('组件马上就要加载')
    }

    componentDidMount () {
        console.log('组件加载完毕')
    }

    addSolder () {
        console.log('hello add solder')
        this.setState({
            solders: [...this.state.solders, '新兵蛋子'+Math.random()]
        })
    }

    render () {
        console.log('组件正在加载了')
        return (
            <div>
                <h2>一营营长, {this.props.boss}</h2>
                <Button type='primary' onClick={ this.addSolder.bind(this) }>新兵入伍</Button>
                <List renderHeader= {() => '士兵列表'}>
                    {
                        this.state.solders.map((v,index) => {
                            return (
                                <List.Item key={index}>
                                    {index + v}
                                </List.Item>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
}

export default App;
