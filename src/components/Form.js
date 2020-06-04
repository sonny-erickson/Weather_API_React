import React from 'react';



const Form = (props) => {
    console.log(props.getWeather)
    return (
        <div>
          <form className="text-light" onSubmit={props.getWeather}>
                <div className="row mb-3 pl-3">
                <input className="col-md-5 col-lg-5" name="city" placeholder='City'></input>
                <input className="col-md-6 col-lg-5" name="country" placeholder='Country (ex = FR)'></input>
                <button type='button' className="btn btn-danger btn-small m-auto"> Submit</button>
                </div>
                
            </form>
          
        </div>
    );
};

export default Form;
//col-offset-2