import { EJSON } from 'bson';

const str = `{
      "_id":"b00064a7606442670cbc7834025c5570",
      "paymentStages":
        [
          {"amountsPayable":
            {"$numberDouble":"480000.0"}
          }
        ]
    }`;

const str2 = EJSON.parse(str);

console.log(typeof str2);
