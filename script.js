
    const btny = document.querySelector('.y').addEventListener
    ('click', yellow);

    const btnp = document.querySelector('.p').addEventListener
    ('click', pink);

    const btnb = document.querySelector('.b').addEventListener
    ('click', blue);

    const btng = document.querySelector('.g').addEventListener
    ('click', grey);
    
    

    function yellow(){
      document.querySelector('body').style.backgroundColor = '#FBEC06';
    }

    function pink(){
      document.querySelector('body').style.backgroundColor = '#ED48BA';
    }
    
    function blue(){
      document.querySelector('body').style.backgroundColor = '#2ca7cc';
    }

    function grey(){
      document.querySelector('body').style.backgroundColor = '#B3D4E0';
    }

