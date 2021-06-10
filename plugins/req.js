export default (context, inject) => {
    inject('req', context.req);
    context.$req = context.req;
}
