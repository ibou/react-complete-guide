import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });

            this.resInterceptor = axios.interceptors.response.use(response => { 
                console.info("[Interceptors] Logged Response By Ibou: ", response.status, response.data); 
                return response;
            }, error=>{
                console.error("[Interceptors] Logged Error Message By Ibou: ", error.message);
                this.setState({ error: error }); 
            });
             
        }
        componentWillUnmount() {
            console.log("componentWillUnmount",this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
            
        }
        errorConfirmedHandler = () =>{
            this.setState({error: null});
        }

        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                     {this.state.error ? this.state.error.message: null}
                </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>

            );
        }
    }

};

export default withErrorHandler;