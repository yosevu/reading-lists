import base from './rebase';

// Google Books
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDMQZtKd597YQ0nrtVdz6zsLB_YPzB49sU	
export function buildURL(value) {
  return baseURL + value + '&filter=paid-ebooks&key=AIzaSyDMQZtKd597YQ0nrtVdz6zsLB_YPzB49sU';
}

// Firebase lists
export function post(newList) {
  base.post(`/${newList.id}`, {
    data: newList,
    context: this,
    then: () => {
      console.log(`Posted new list`);
    }
  });
}

export function remove(id) {
  base.remove(id).then(() => {
    console.log(`Removed list`);
  }).catch(error => {
    console.log('error', error);
  });
}

export function update(name, list) {
  base.update(`${list.id}`, {
    data: { name: name },
    then(err) {
      if (!err) {
        console.log(`Updated list`);
      }
    }
  });
}
