function 暂停 () {
    motor.motorStopAll()
}
function 右转 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
function 左转 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
}
bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
blockytalky.onReceivedString(function (rc, receivedString) {
    if (receivedString == "1") {
        前进()
    } else if (receivedString == "2") {
        后退()
    } else if (receivedString == "3") {
        左移()
    } else if (receivedString == "4") {
        右移()
    } else if (receivedString == "5") {
        左转()
    } else if (receivedString == "6") {
        右转()
    } else {
        暂停()
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
function 左移 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
function 后退 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
function 前进 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
}
function 右移 () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
}
basic.showIcon(IconNames.House)
