import _, { map } from "lodash";
import Model from "../../models/index.js";
import catchAsync from "../../libs/catchAsync.js";
import { findAll, findAllSavedSearch } from "../../services/searchService.js";
import { Op } from 'sequelize';

const { customer_search_log } = Model;

export const getPopularSearch = catchAsync(async (req, res, next) => {
    const query = req.query.q;
    const searchResults = await findAll(customer_search_log, { search_content: {
        [Op.or]: [{[Op.like]: query+"%"}, {[Op.like]: query.toLowerCase()+"%"}]
      } });
    
  
    return res.status(200).json({
      status: "success", 
      statusCode: 200,
      payload: searchResults
    });
  });
export const getSavedPopularSearch = catchAsync(async (req, res, next) => {
    const searchResults = await findAllSavedSearch(customer_search_log);
  
    return res.status(200).json({
      status: "success", 
      statusCode: 200,
      payload: searchResults
    });
  });
