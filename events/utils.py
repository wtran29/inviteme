import random
import string


def random_string_generator(size=10, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def event_code_generator(instance):
    new_code = random_string_generator().upper()

    Klass = instance.__class__
    qs_exists = Klass.objects.filter(code=new_code).exists()
    if qs_exists:
        return event_code_generator(instance)
    return new_code