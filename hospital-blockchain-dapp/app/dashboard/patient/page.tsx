"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  FileText,
  ImageIcon,
  Activity,
  Calendar,
  User,
  Shield,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"

export default function PatientDashboard() {
  const [selectedFileType, setSelectedFileType] = useState("")
  const [description, setDescription] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")

  const fileTypes = [
    { value: "lab-report", label: "Lab Report", icon: Activity },
    { value: "x-ray", label: "X-Ray", icon: ImageIcon },
    { value: "prescription", label: "Prescription", icon: FileText },
    { value: "medical-history", label: "Medical History", icon: Calendar },
  ]

  const doctors = [
    { id: "dr-smith", name: "Dr. Sarah Smith", specialty: "Cardiologist" },
    { id: "dr-johnson", name: "Dr. Michael Johnson", specialty: "Neurologist" },
    { id: "dr-williams", name: "Dr. Emily Williams", specialty: "Radiologist" },
  ]

  const fileHistory = [
    {
      ledgerId: "LED001",
      fileType: "Lab Report",
      timestamp: "2024-01-15 10:30 AM",
      status: "encrypted",
      icon: Activity,
    },
    {
      ledgerId: "LED002",
      fileType: "X-Ray",
      timestamp: "2024-01-14 02:15 PM",
      status: "encrypted",
      icon: ImageIcon,
    },
    {
      ledgerId: "LED003",
      fileType: "Prescription",
      timestamp: "2024-01-12 09:45 AM",
      status: "encrypted",
      icon: FileText,
    },
  ]

  const auditLogs = [
    {
      viewer: "Dr. Sarah Smith",
      ledgerId: "LED001",
      timestamp: "2024-01-15 11:00 AM",
      action: "View",
      emergency: false,
    },
    {
      viewer: "Dr. Michael Johnson",
      ledgerId: "LED002",
      timestamp: "2024-01-14 03:30 PM",
      action: "View",
      emergency: true,
    },
    {
      viewer: "Hospital Staff",
      ledgerId: "LED003",
      timestamp: "2024-01-13 08:20 AM",
      action: "Emergency Access",
      emergency: true,
    },
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Patient Dashboard</h1>
          <p className="text-slate-600 mt-1">Manage your medical records securely</p>
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
          <CheckCircle className="w-4 h-4 mr-1" />
          Wallet Connected
        </Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Encrypted File */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Upload className="w-5 h-5" />
              Upload Encrypted File
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="fileType" className="text-sm font-medium text-slate-700">
                File Type
              </Label>
              <select
                id="fileType"
                value={selectedFileType}
                onChange={(e) => setSelectedFileType(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select file type...</option>
                {fileTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="description" className="text-sm font-medium text-slate-700">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the medical record..."
                className="mt-1 resize-none"
                rows={3}
              />
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Click to upload or drag and drop</p>
              <p className="text-slate-400 text-sm mt-1">AES-256 encryption will be applied automatically</p>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              <Shield className="w-4 h-4 mr-2" />
              Upload & Encrypt
            </Button>
          </CardContent>
        </Card>

        {/* Grant/Revoke Access */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <User className="w-5 h-5" />
              Grant/Revoke Access
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="doctor" className="text-sm font-medium text-slate-700">
                Select Doctor
              </Label>
              <select
                id="doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Choose a doctor...</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                <Eye className="w-4 h-4 mr-2" />
                Grant Access
              </Button>
              <Button variant="destructive" className="flex-1">
                <EyeOff className="w-4 h-4 mr-2" />
                Revoke Access
              </Button>
            </div>

            {/* Current Access List */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-slate-700 mb-3">Current Access Permissions</h4>
              <div className="space-y-2">
                {doctors.slice(0, 2).map((doctor) => (
                  <div key={doctor.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-800">{doctor.name}</p>
                      <p className="text-sm text-slate-600">{doctor.specialty}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* File History */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            File History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Ledger ID</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Timestamp</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {fileHistory.map((file, index) => {
                  const Icon = file.icon
                  return (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-slate-500" />
                          {file.fileType}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-sm">{file.ledgerId}</td>
                      <td className="py-3 px-4 text-slate-600">{file.timestamp}</td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          <Shield className="w-3 h-3 mr-1" />
                          Encrypted
                        </Badge>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Audit Logs */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Audit Logs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Viewer</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Record</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Timestamp</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {log.emergency && <AlertTriangle className="w-4 h-4 text-red-500" />}
                        {log.viewer}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono text-sm">{log.ledgerId}</td>
                    <td className="py-3 px-4 text-slate-600">{log.timestamp}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={log.emergency ? "destructive" : "secondary"}
                        className={log.emergency ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}
                      >
                        {log.emergency && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {log.action}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
