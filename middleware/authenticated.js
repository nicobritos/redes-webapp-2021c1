import user from '~/plugins/user';

export default function({redirect}) {
    if (!user.data) {
        return redirect('/login');
    }
}
