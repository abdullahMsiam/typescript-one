{


    // spreed operator 
    const boss1: string[] = ['abdullah', 'muhammad', 'klaseen']
    const boss2: string[] = ['abdullah1', 'muhammad2', 'klaseen2']

    boss1.push(...boss2);

    const teachers = {
        phy: 'abdul',
        che: 'ashik',
        bio: 'abir'
    }

    const teachers2 = {
        bng: 'siam',
        eng: 'muhammad',
        reg: 'san'
    }

    const allTeacher = {
        ...teachers, ...teachers2
    }


    // REST OPERATOR LEARNING: 
    // Element ---> bind in a array ---> 

    const greetFriends = (...friends: string[]) => {

        friends.forEach((f: string) => {
            console.log(`Hi ${f}`);

        });
    }

    greetFriends('abul', 'kabul', 'babul', 'chabul');






}