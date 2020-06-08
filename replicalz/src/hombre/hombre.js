import React from 'react';
import Nab from '../components/nab'
import Zaph from '../components/hc/zaph'
import Pagination from '../components/pagination'
import Furer from '../components/furer'
class hombre extends React.Component{
    render(){
        return( <div >
            <div><Nab /></div>
            <div><Zaph /></div>
            <div><Pagination /></div>
            <div><Furer /></div>
            </div>);   
        
    }
}
export default hombre;