module.exports = {
  async afterCreate(event) {
     const { result } = event;
     console.log("result=", result);
     
     try {
        await strapi.plugins['email'].services.email.send({
           to: 'tom.zed39@gmail.com',
           from: 'tom.zed39@gmail.com',
           subject: 'You have new todo',
           text: `Your todo is: ${result.name}`
        })
     } catch(err){
        console.log(err);
     }
  }
}
