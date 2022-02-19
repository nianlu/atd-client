

## initial gcp app engin
```
gcloud components update
gcloud init
gcloud app deploy
```

## gcp auth
client id
476069197979-4qvql9sgerf0bchrkjopalehhgdokk3a.apps.googleusercontent.com
client secret
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


## gcp sql
- install sql proxy
curl -o cloud_sql_proxy https://dl.google.com/cloudsql/cloud_sql_proxy.darwin.amd64
chmod +x cloud_sql_proxy
  + install at /Users/S/Google
- check sql instance
gcloud sql instances list
- turn on sql proxy (using connection name)
./cloud_sql_proxy -instances=atd-web-341804:us-east4:atd-db-test=tcp:5432
- connect to gcp sql
host: 127.0.0.1
user: postgres
pw: postgres
