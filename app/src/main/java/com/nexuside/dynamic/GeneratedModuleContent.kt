package com.nexuside.dynamic

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun GeneratedModuleContent() {
var count by remember { mutableStateOf(0) }

Column(
  modifier = Modifier.fillMaxSize().padding(16.dp),
  horizontalAlignment = Alignment.CenterHorizontally,
  verticalArrangement = Arrangement.Center
) {
  Text("Dynamic Module v1")
  Spacer(modifier = Modifier.height(16.dp))
  Button(onClick = { count++ }) {
    Text("Clicked: $count times")
  }
}
}
