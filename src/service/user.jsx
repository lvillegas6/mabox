import { Fetch } from '@/lib/Fetch';

function fromApiResponseToJwt({ data }) {
    return data.token
  }
  
  export function loginService({ user }) {
    const { email, password, role } = user;
    return new Fetch()
      .setUrl('backoffice/login')
      .setMethod('post')
      .setData({ email, password, role })
      .send()
      .then(fromApiResponseToJwt);
  }

export function create({ user }) {
  return new Fetch()
    .setUrl('backoffice/logged/create')
    .setMethod('post')
    .setData(user)
    .setAuthorization()
    .send()
}

export function update({ user }) {
  return new Fetch()
    .setUrl('backoffice/logged/update')
    .setMethod('put')
    .setData(user)
    .setAuthorization()
    .send()
}

export function remove(email) {
  return new Fetch()
    .setUrl('backoffice/logged/delete')
    .setMethod('delete')
    .setData({ username: email })
    .setAuthorization()
    .send()
}


export function list() {
  return new Fetch()
    .setUrl('backoffice/logged/list')
    .setMethod('get')
    .setAuthorization()
    .send()
}
