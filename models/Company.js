const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Department = require('./Department');

//Create CompanySchema
const CompanySchema = new Schema({
    adminUser: {
      type: Schema.Types.ObjectId,
      ref: 'adminUser' //AdminUser is name of collection exported from model User
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now
    },
    handle: {
        type: String
    }
});

CompanySchema.pre('remove', function(doc) {
  console.log('Company depedencies removed')
  console.log('doc', doc);
  console.log('this._id', this._id)

  Department.find({Company: this._id }).lean().then(departments => {
    console.log('departments', departments)
    departments.forEach(function (department) {
      console.log('department', department)

      Department.findOneAndRemove({ _id: department._id }, function(err, department){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            department.remove();
          }
      });
    })
  })
});


module.exports = Company = mongoose.model('Company', CompanySchema)
