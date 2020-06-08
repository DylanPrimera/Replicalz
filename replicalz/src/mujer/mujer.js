import React from 'react';
import Nab from '../components/nab'
import Zapm from '../components/mc/zapm'
import Pagination from '../components/pagination'
import Furer from '../components/furer'
class hombre extends React.Component{
    render(){
        return( <div >
            <div><Nab /></div>
            <div><Zapm /></div>
            <div><Pagination /></div>
            <div><Furer /></div>
            </div>);   
        
    }
}
export default hombre;