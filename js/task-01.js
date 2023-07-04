console.log(
  `Number of categories: ${document.querySelectorAll('li.item').length}`
);
console.log(`\r\n`);

document.querySelectorAll('li.item').forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent} `);
  console.log(`Elements: ${item.querySelector('ul').children.length}`);
  console.log('\r\n');
});
