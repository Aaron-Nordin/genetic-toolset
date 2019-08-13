insert into users (username, email, user_image)
values (${username}, ${email}, ${user_image})
returning *