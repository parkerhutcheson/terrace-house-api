import express from 'express';
import { findAllMembers, searchForAMember } from "./controllers/members.js";
import { getARandomQuote, getQuoteByMember, getASpecificQuote } from './controllers/quotes.js';

const router = express.Router();

// Members
router.get('/members', async (req, res) => {
  const { language } = req.params;
  const result = await findAllMembers();
  return res.status(200).json(result);
});

router.get('/member/:name', async (req, res) => {
  const { name } = req.params;
  const result = await searchForAMember(name);
  return res.status(200).json(result);
});

// Quotes
router.get('/quotes', async (req, res) => {
  const { language } = req;
  const result = await getARandomQuote(language);
  return res.status(200).json(result);
});

router.get('/quotes/:name', async (req, res) => {
  const { name } = req.params;
  const result = await getQuoteByMember(name);
  return res.status(200).json(result);
});

router.get('/quotes/:id', async (req, res) => {
  const { id } = req.params;
  const result = await getASpecificQuote(parseInt(id));
  return res.status(200).json(result);
});

export default router;