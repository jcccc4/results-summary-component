import json from '../../../json/data.json'

export default function handler(req, res) {
  res.status(200).json(json)
}