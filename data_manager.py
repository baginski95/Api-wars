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
    print(users)
    return users


@connection.connection_handler
def test_select(cursor):
    cursor.execute("""SELECT * FROM users """)
    answers = [dict(row) for row in cursor.fetchall()]
    return answers
