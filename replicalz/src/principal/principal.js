import React from 'react';
import Nab from '../components/nab'
import Zap from '../components/zap'
import Pagination from '../components/pagination'
import Furer from '../components/furer'
class principal extends React.Component{
    render(){
        return( <div >
            <div><Nab /></div>
            <div><Zap /></div>
            <div><Pagination /></div>
            <div><Furer /></div>
            </div>);   
        
    }
}
export default principal;