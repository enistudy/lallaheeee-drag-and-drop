import db from '../config/database';

const preloadHandler = (req, res, next, domainId) => {
  const { Domain } = db;

  Domain.findByPk(domainId)
    .then(domain => {
      if (!domain) return res.sendStatus(404);

      req.domain = domain;
      return next();
    })
    .catch(() => res.sendStatus(500));
};

const postHandler = (req, res) => {
  const { Domain } = db;

  const { title, active } = req.body;
  Domain.create({ title, active })
    .then(domain => res.send(domain))
    .catch(() => res.sendStatus(500));
};

const getHandler = (req, res) => {
  const { domain } = req;
  res.send(domain);
};

const putHandler = (req, res) => {
  const { domain } = req;
  const { title, active } = req.body;

  if (title) domain.title = title;
  if (active) domain.active = active;

  domain
    .save()
    .then(saveDomain => res.send(saveDomain))
    .catch(err => res.send(err));
};

const deleteHandler = (req, res) => {
  const { domain } = req;
  domain
    .destroy()
    .then(res.sendStatus(204))
    .catch(() => res.sendStatus(500));
};

export {
  preloadHandler,
  postHandler,
  getHandler,
  putHandler,
  deleteHandler,
};
