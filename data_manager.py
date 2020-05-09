import connection
from operator import itemgetter

"""
@connection.connection_handler
def get_answers(cursor, question_id=None):
    if question_id:
        cursor.execute("SELECT * FROM answer WHERE question_id = (%s)", (question_id,))
        answers = [dict(row) for row in cursor.fetchall()]
    else:
        cursor.execute("SELECT * FROM answer")
        answers = [dict(row) for row in cursor.fetchall()]
    return answers


@connection.connection_handler
def get_questions(cursor, question_id=None):
    if not question_id:
        cursor.execute("SELECT * FROM question )
        questions = [dict(row) for row in cursor.fetchall()]
    else:
        cursor.execute("SELECT * FROM question WHERE id = (%s)", (question_id,))
        questions = [dict(row) for row in cursor.fetchall()]
    return questions
"""


@connection.connection_handler
def get_users(cursor):
    cursor.execute(""" SELECT username from users""")
    users = cursor.fetchall()
    return users


@connection.connection_handler
def test_select(cursor):

    cursor.execute("""SELECT password FROM users WHERE username = '123'""")
    # answers = [dict(row) for row in cursor.fetchall()]
    answers = cursor.fetchall()
    return answers[0]

@connection.connection_handler
def insert_users(cursor, user_to_insert):

    insert_query = f"INSERT INTO users ("
    for key in user_to_insert:
        insert_query += f"{key}, "
    insert_query = insert_query.rstrip(', ') + ")"

    insert_query += f" VALUES ("
    for key in user_to_insert:
        insert_query += f"%({key})s, "
    insert_query = insert_query.rstrip(', ') + ")"

    cursor.execute(insert_query, user_to_insert)

@connection.connection_handler
def checkIfUserExists(cursor, user_name_to_check):

    # select_query ="""SELECT password FROM users WHERE username = %(username)s;"""
    cursor.execute("""SELECT password FROM users WHERE username = %(username)s;""",
                   {'username': user_name_to_check['username']})

    # cursor.execute("""INSERT INTO question (title,submission_time, message, user_email) VALUES (%s,%s,%s,%s);""",
    #                (new_question['title'], util.submission_time(), new_question['message'], user_email))
    # cursor.execute("""SELECT id FROM question WHERE title= %(title)s;""",
    #                {'title': new_question['title'], 'message': new_question['message']})


    # "SELECT username FROM users WHERE username = (%s);""", (user_name_to_check["username"],)
    # select_query = f"SELECT username FROM users WHERE username = (%s);""", (user_name_to_check["username"],)
    # print(select_query)
    # print(cursor.mogrify(select_query))
    # cursor.execute(select_query,user_data_to_check)
    result = cursor.fetchall()
    return result[0]["password"]

# print(test_select())