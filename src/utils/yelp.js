// pages/api/yelp.js

import axios from 'axios';

export default async function handler(req, res) {
    try {
        const businessId = 'mr-pig-korean-bbq-philadelphia'; 
        const response = await axios.get(
            `https://api.yelp.com/v3/businesses/${businessId}/reviews`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.yelpAPIKEY}`,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching Yelp data:', error);
        res.status(500).json({ error: 'Failed to fetch data from Yelp' });
    }
}
