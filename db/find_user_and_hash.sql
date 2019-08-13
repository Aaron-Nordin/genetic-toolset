select * from users join credentialsp 
on credentialsp.user_id = users.user_id
where username = $1;