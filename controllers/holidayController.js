import { Holiday } from "../models/holidayModel.js";
import jsonResponse from '../utils/json-response.js';
import responseCodes from '../helpers/response-codes.js';
import {successMessages , errorMessages }  from '../utils/response-message.js';


export const addHoliday = async (req, res) => {
    const {holiday_name , holiday_date } = req.body;
    if(!(holiday_name && holiday_date )){
        return jsonResponse(res, responseCodes.BadRequest,errorMessages.missingParameter,{})
    }
    const newHoliday = new Holiday({
       holiday_name,
       holiday_date
    });
    newHoliday.save() 
    .then(() => {
        return jsonResponse(res, responseCodes.OK, errorMessages.noError,{}, successMessages.Create);
    }).catch(err => jsonResponse(res, responseCodes.Invalid, err , {}))
};
  
export const getHoliday = async (req, res) => {
    // const {user_id } = req.params;
    // if(!(user_id)){
    //     return jsonResponse(res, responseCodes.BadRequest,errorMessages.missingParameter,{})
    // }
    Holiday.find() 
    .then((holidays) => {
        return jsonResponse(res, responseCodes.OK, errorMessages.noError,holidays, successMessages.Create);
    }).catch(err => jsonResponse(res, responseCodes.Invalid, err , {}))
};

export const editHoliday = async (req, res) => {
    const { holiday_id } = req.params;
    if(!(holiday_id)){
        return jsonResponse(res, responseCodes.BadRequest,errorMessages.missingParameter,{})
    }
    await Holiday.findByIdAndUpdate({_id:holiday_id} ,req.body) 
    .then(() => {
        return jsonResponse(res, responseCodes.OK, errorMessages.noError,{}, successMessages.Update);
    }).catch(err => jsonResponse(res, responseCodes.Invalid, err , {}))
};

export const filterHoliday = async (req, res) => {
    const { from_date , to_date } = req.body;
    if(!(from_date && to_date)){
        return jsonResponse(res, responseCodes.BadRequest,errorMessages.missingParameter,{})
    }
    var query = {};
    if(req.body.from_date && req.body.to_date) query.holiday_date = { $gte : req.body.from_date , $lte : req.body.to_date};
    
    Holiday.find(query) 
    .then((leaves) => {
        return jsonResponse(res, responseCodes.OK, errorMessages.noError,leaves, successMessages.Fetch);
    }).catch(err => jsonResponse(res, responseCodes.Invalid, err , {}))
};