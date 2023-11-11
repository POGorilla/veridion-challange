import { StatusCodes } from "http-status-codes";
import axios from 'axios'

export const getCompetition = async (req, res) => {
  const { city, region, country, industry } = req.body;
  const url = process.env.BASE_URL + '/search/v2/companies';
  const response = await axios({
    url,
    method: 'post',
    headers: {
      "Content-Type": 'application/json',
      'x-api-key': process.env.VERIDION_API_KEY_SEARCH
    },
    data: {
      filters: {
        and: [
          (region || country || city ? {
            attribute: "company_location",
            relation: "equals",
            value: {
              ...(region) && { region },
              ...(country) && { country },
              ...(city) && { city },
            }
          }: undefined),
          (industry ? {
            attribute: "company_industry",
            relation: "equals",
            value: industry
          } : {}),
        ]
      },
    },
  });
  const obj = {filters: {
    and: [
      (region || country || city ? {
        attribute: "company_location",
        relation: "equals",
        value: {
          ...(region) && { region },
          ...(country) && { country },
          ...(city) && { city },
        }
      }: undefined),
      (industry ? {
        attribute: "company_industry",
        relation: "equals",
        value: industry
      } : {}),
    ]
  },}
  console.log(obj.filters.and);
  console.log({...response.data});
  return res.status(StatusCodes.OK).json({
    msg: response.data
  });
}