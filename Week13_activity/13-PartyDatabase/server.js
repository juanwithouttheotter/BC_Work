var orm = require('./config/orm');


orm.selectAllCol('party_name','parties');
orm.selectAllCol('client_name','clients');
orm.selectAllbyRecord('party_name','parties', 'party_type', 'grown-up');
orm.join('*', 'parties', 'INNER', 'clients', 'parties.client_id = clients.id');