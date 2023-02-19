FROM python:3.10.8-alpine3.16

ENV PYTHONBURRERED=1

WORKDIR /django/src/app

COPY ./requirements.txt ./requirements.txt

# pipのアップデート
RUN pip install --upgrade pip && \
    pip install --upgrade setuptools

RUN pip install -r requirements.txt